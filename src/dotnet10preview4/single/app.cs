using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

public class StatisticalCalculator
{
    public class FileStatistics
    {
        public string FileName { get; set; }
        public double Mean { get; set; }
        public double Median { get; set; }
        public double StandardDeviation { get; set; }
        public double Maximum { get; set; }
        public double Minimum { get; set; }
        public double P75 { get; set; }
        public double P90 { get; set; }
        public double P99 { get; set; }
        public int Count { get; set; }
        public TimeSpan ReadTime { get; set; }
        public TimeSpan CalculationTime { get; set; }
    }

    public static FileStatistics CalculateStatistics(string filePath)
    {
        var stats = new FileStatistics { FileName = Path.GetFileName(filePath) };

        var startReadTime = DateTime.UtcNow;
        var data = new List<double>();
        try
        {
            foreach (var line in File.ReadLines(filePath))
            {
                if (double.TryParse(line, out double value))
                {
                    data.Add(value);
                }
            }
        }
        catch (FileNotFoundException)
        {
            Console.WriteLine($"Error: File not found at {filePath}");
            return null;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error reading file {filePath}: {ex.Message}");
            return null;
        }
        stats.ReadTime = DateTime.UtcNow - startReadTime;

        if (!data.Any())
        {
            Console.WriteLine($"No valid data found in {filePath}");
            return stats;
        }

        var startCalcTime = DateTime.UtcNow;

        data.Sort(); // Sort for median and percentiles

        stats.Count = data.Count;
        stats.Mean = data.Average();
        stats.Minimum = data.Min();
        stats.Maximum = data.Max();

        // Median
        if (data.Count % 2 == 0)
        {
            stats.Median = (data[data.Count / 2 - 1] + data[data.Count / 2]) / 2;
        }
        else
        {
            stats.Median = data[data.Count / 2];
        }

        // Standard Deviation
        var sumOfSquaresOfDifferences = data.Sum(val => Math.Pow(val - stats.Mean, 2));
        stats.StandardDeviation = Math.Sqrt(sumOfSquaresOfDifferences / (data.Count - 1)); // Sample standard deviation

        // Percentiles
        stats.P75 = CalculatePercentile(data, 75);
        stats.P90 = CalculatePercentile(data, 90);
        stats.P99 = CalculatePercentile(data, 99);

        stats.CalculationTime = DateTime.UtcNow - startCalcTime;

        return stats;
    }

    private static double CalculatePercentile(List<double> sortedData, double percentile)
    {
        if (!sortedData.Any()) return 0;
        if (percentile < 0 || percentile > 100)
            throw new ArgumentOutOfRangeException(nameof(percentile), "Percentile must be between 0 and 100.");

        double rank = (percentile / 100.0) * (sortedData.Count - 1);
        int lowerIndex = (int)Math.Floor(rank);
        int upperIndex = (int)Math.Ceiling(rank);

        if (lowerIndex == upperIndex)
        {
            return sortedData[lowerIndex];
        }
        else
        {
            double lowerValue = sortedData[lowerIndex];
            double upperValue = sortedData[upperIndex];
            return lowerValue + (upperValue - lowerValue) * (rank - lowerIndex);
        }
    }
}


string[] files = { "percentdisktime.txt", "averagediskqueuelength.txt", "bytespersecond.txt" };

foreach (var file in files)
{
    Console.WriteLine($"\n--- Processing {file} ---");
    var stats = StatisticalCalculator.CalculateStatistics(file);

    if (stats != null)
    {
        Console.WriteLine($"File: {stats.FileName}");
        Console.WriteLine($"Total Data Points: {stats.Count}");
        Console.WriteLine($"Mean: {stats.Mean:N3}");
        Console.WriteLine($"Median: {stats.Median:N3}");
        Console.WriteLine($"Standard Deviation: {stats.StandardDeviation:N3}");
        Console.WriteLine($"Maximum: {stats.Maximum:N3}");
        Console.WriteLine($"Minimum: {stats.Minimum:N3}");
        Console.WriteLine($"P75: {stats.P75:N3}");
        Console.WriteLine($"P90: {stats.P90:N3}");
        Console.WriteLine($"P99: {stats.P99:N3}");
        Console.WriteLine($"Time to read file: {stats.ReadTime.TotalMilliseconds:N2} ms");
        Console.WriteLine($"Time to calculate statistics: {stats.CalculationTime.TotalMilliseconds:N2} ms");
    }
}
