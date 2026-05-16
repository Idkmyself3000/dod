import { v4 as uuidv4 } from 'uuid';

export class BattleManager {
  static get COSTS() {
    return {
      ATTACK: 5,
      GAMBLE: 3
    };
  }

  static createAttack(fromTeamId, targetTeamId, puzzleId) {
    return {
      id: uuidv4(),
      fromTeam: fromTeamId,
      toTeam: targetTeamId,
      defPuzzleId: puzzleId,
      deadline: Date.now() + 30000 // 30 seconds to defend
    };
  }

  static isDefending(pendingAttacks, teamId) {
    return pendingAttacks.some(a => a.toTeam === teamId);
  }

  static validateAttack(team, targetTeam, pendingAttacks, safeZoneActive) {
    if (safeZoneActive) return { valid: false, error: "Safe zone is active" };
    if (team.tokens < this.COSTS.ATTACK) return { valid: false, error: "Not enough tokens" };
    if (!targetTeam || targetTeam.status === 'eliminated') return { valid: false, error: "Target eliminated or invalid" };
    if (this.isDefending(pendingAttacks, team.id)) return { valid: false, error: "Cannot attack while defending" };
    if (this.isDefending(pendingAttacks, targetTeam.id)) return { valid: false, error: "Target is already defending an attack" };
    
    return { valid: true };
  }
}
