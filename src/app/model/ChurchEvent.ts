export class ChurchEvent {
   startDate!: Date;
   endDate!: Date;
   imageName!: string;
   theme!: string;
   venue: string = "P.A.G, Ole Nguruone";
   speaker: string = "Pst. Joshua Matara"
   description!: string;
   entryFee!: number;

   constructor(theme: string, description: string, entryFee: number, 
      startDate: Date, imageName: string, venue?: string, speaker?:string, endDate?: Date) {
      this.startDate = startDate;
      this.imageName = imageName;
      this.theme = theme;
      this.description = description;
      this.entryFee = entryFee;
      if(venue != undefined) {
         this.venue = venue;
      }
      if(speaker != undefined) {
         this.speaker = speaker;
      }
      if(endDate != undefined) {
         this.endDate = endDate;
      } else {
         this.endDate = startDate;
      }
   }
}