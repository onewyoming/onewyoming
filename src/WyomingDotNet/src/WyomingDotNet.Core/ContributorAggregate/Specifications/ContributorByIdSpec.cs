using Ardalis.Specification;

namespace WyomingDotNet.Core.ContributorAggregate.Specifications;

public class ContributorByIdSpec : Specification<Contributor>
{
  public ContributorByIdSpec(int contributorId)
  {
    _ = Query
        .Where(contributor => contributor.Id == contributorId);
  }
}
