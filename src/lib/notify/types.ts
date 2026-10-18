/** Result of one notification channel. Failures throw instead of returning. */
export type NotifyResult =
  | { status: 'sent' }
  /** Not configured (e.g. missing env vars) — counts as "not delivered", but is not an error */
  | { status: 'skipped'; reason: string }
  /** Dev only: printed to the console instead of being sent — counts as delivered */
  | { status: 'logged' };
