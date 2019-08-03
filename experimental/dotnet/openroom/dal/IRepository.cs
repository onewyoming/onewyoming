using System.Linq;

namespace dal
{
    public interface IRepository<T> where T: IEntity
    {
        IEnumerable<T> List() { get; }
        void Add(T entity);
        void Delete(T entity);
        void Update(T entity);
        T FindById(int id);
    }
}