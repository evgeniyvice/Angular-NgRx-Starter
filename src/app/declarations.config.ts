declare global {
  /**
   * C# Task used without generic type in case of 'void' value.
   * {@link https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task}
   * TS forces to use `Promise<void>` instead of simple `Promise`.
   * We can use this hack for C#-style return types:
   * `async function f(): Promise {}`
   */
  // tslint:disable-next-line:no-empty-interface
  interface Promise<T = void> {}
}

/**
 * hack to enforce that a file is a module
 * https://github.com/tc39/proposal-modules-pragma#alternatives
 */
export {}
