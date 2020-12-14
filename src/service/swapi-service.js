
export default class SwapiService {

    _urlApi = 'https://swapi.dev/api/'
    
    async getResource(url) {
      const result = await fetch(`${this._urlApi}${url}`)
    
      if(!result.ok) {
        throw new Error('error')
      }
      return await result.json()
    }
     async getAllPeople() {
       const res = await this.getResource('/people/')
       return res
     }
    
     async getPerson (id) {
        return this.getResource(`/people/:${id}/`)
     }
    
    }
    
    const swapi = new SwapiService()
    swapi.getAllPeople().then((r) => {
      console.log(r)
    })
    
    
    
    
    