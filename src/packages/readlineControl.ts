import readline from 'readline';

export class ReadlineControl {
  private static readlineOptions: readline.ReadLineOptions = { input: process.stdin, output: process.stdout };

  static getReadlineInstance = (customReadlineOptions?: readline.ReadLineOptions) =>
    readline.createInterface(customReadlineOptions ?? this.readlineOptions);
}
