export class Program {
   programName!: string;
   day!: string;
   startTime!: string;
   endTime!: string;

   constructor(programName: string, day: string, startTime: string, endTime: string) {
      this.programName = programName;
      this.day = day;
      this.startTime = startTime;
      this.endTime = endTime;
   }
}