using Ardalis.Result;
using Ardalis.SharedKernel;

namespace WyomingDotNet.UseCases.Contributors.Get;

public record GetContributorQuery(int ContributorId) : IQuery<Result<ContributorDTO>>;
