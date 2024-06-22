using Ardalis.Result;
using Ardalis.SharedKernel;

namespace WyomingDotNet.UseCases.Contributors.Delete;

public record DeleteContributorCommand(int ContributorId) : ICommand<Result>;
