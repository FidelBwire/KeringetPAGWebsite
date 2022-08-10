export class Post {
   title!: string;
   author!: string;
   description!: string;
   articlePage!: string;
   date: Date = new Date();

   constructor(title: string, author: string, description: string,
         articlePage: string, date?: Date) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.articlePage = articlePage;
      
      if(date != undefined)
         this.date = date;
   }
}