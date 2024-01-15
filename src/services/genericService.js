
class genericService {
    constructor(repository) {
      this.repository = repository;
    }
  
    async getAll() {
      return await this.repository.getAll();
    }
  
    async getById(id) {
      return await this.repository.getById(id);
    }
  
    async create(model) {
      return await this.repository.create(model);
    }
  
    async update(id, model) {
      return await this.repository.update(id, model);
    }
  
    async delete(id) {
      return await this.repository.delete(id);
    }
  }
  
  export default genericService;
  