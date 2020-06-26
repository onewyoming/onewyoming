using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using Npgsql;

public class Program
{
    public class Person
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }


    public static void Main()
    {
        string sqlPerson = "SELECT * FROM person;";


        using(var connection = new NpgsqlConnection("postgres://hrzbdtnk:gFUPUNncgiHfgXa5C80TwV7nKYyU6tdQ@topsy.db.elephantsql.com:5432/hrzbdtnk"))
        {
            var personDetails = connection.Query<Person>(sqlPerson).ToList();

            Console.WriteLine(personDetails.Count);
        }
    }

}

