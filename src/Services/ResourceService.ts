
export default class ResourceService {

 static BASE_URL = 'https://api.themoviedb.org/3/';
 static API_KEY = 'ccd8fe97d93ed48842eb8d2f0b06d4dc';


 static async getPopularMovies():Promise<any> {
   try {
         const response = await fetch(`${this.BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}`);
         return response.json();
     } catch (err) {
         return console.log(err);
     } 
 }

  static async getKidsMovies():Promise<any>{
    try {
          const response = await fetch(`${this.BASE_URL}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.API_KEY}`);
          return response.json();
      } catch (err) {
          return console.log(err);
      } 
  }


  
  static async getDramaMovies(year:number):Promise<any>{
    try {
          const response = await fetch(`${this.BASE_URL}discover/movie?with_genres=18&primary_release_year=${year}&api_key=${this.API_KEY}`);
          return response.json();
      } catch (err) {
          return console.log(err);
      } 
  }


  static async getTheatresMovies():Promise<any>{
    try {
          const response = await fetch(`${this.BASE_URL}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${this.API_KEY}`);
          return response.json();
      } catch (err) {
          return console.log(err);
      } 
  }


  static async getFromMovies(year:number):Promise<void|(() => Promise<any>)>{
    try {
          const response = await fetch(`${this.BASE_URL}discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&api_key=${this.API_KEY}`);
          return response.json();
      } catch (err) {
          return console.log(err);
      } 
  }



  static async getBestDramaMovies():Promise<any>{
    try {
          const response = await fetch(`${this.BASE_URL}discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${this.API_KEY}`);
          return response.json();
      } catch (err) {
          return console.log(err);
      } 
  }














}