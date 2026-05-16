import { puzzles, normalize } from '../data/puzzles.js';

export class PuzzleManager {
  constructor() {
    this.puzzles = puzzles;
  }

  // Gets a puzzle by ID
  getPuzzleById(id) {
    return this.puzzles.find(p => p.id === id);
  }

  // Gets a random puzzle matching criteria
  getRandomPuzzle(difficulty, pool, excludeIds = []) {
    const targetDifficulty = difficulty.toUpperCase();
    
    const candidates = this.puzzles.filter(p => {
      const difficultyMatch = (targetDifficulty === "ANY") ? true : (p.difficulty.toUpperCase() === targetDifficulty);
      const poolMatch = pool ? (p.pool === pool) : true;
      const notExcluded = !excludeIds.includes(p.id);
      return difficultyMatch && poolMatch && notExcluded;
    });
    
    if (candidates.length === 0) {
      // Fallback: ignore exclusion if we have to
      const fallback = this.puzzles.filter(p => (targetDifficulty === "ANY") ? true : (p.difficulty.toUpperCase() === targetDifficulty));
      if (fallback.length === 0) {
        return this.puzzles[Math.floor(Math.random() * this.puzzles.length)];
      }
      return fallback[Math.floor(Math.random() * fallback.length)];
    }
    
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  // Validates an answer
  validateAnswer(puzzleId, submittedAnswer) {
    const puzzle = this.getPuzzleById(puzzleId);
    if (!puzzle) return { correct: false, tokenReward: 0 };

    const normSubmitted = normalize(submittedAnswer);
    const normCorrect = normalize(puzzle.answer);
    
    let isCorrect = (normSubmitted === normCorrect);

    if (!isCorrect && puzzle.answerAliases) {
      for (const alias of puzzle.answerAliases) {
        if (normalize(alias) === normSubmitted) {
          isCorrect = true;
          break;
        }
      }
    }

    return { correct: isCorrect, tokenReward: isCorrect ? puzzle.tokenReward : 0 };
  }
}
