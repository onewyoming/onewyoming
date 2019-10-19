// using System;

// namespace WonjuDAL
// {
//     public class Class1
//     {
//         public bool DoSomething()
//         {
//             string connectionString = "Data Source=PAT;Initial Catalog=Wonju;Integrated Security=True";

//             using (SqlConnection _con = new SqlConnection(connectionString))
//             {
//                 string queryStatement = "SELECT TOP 5 * FROM dbo.Customers ORDER BY CustomerID";

//                 using (SqlCommand _cmd = new SqlCommand(queryStatement, _con))
//                 {
//                     DataTable customerTable = new DataTable("Top5Customers");

//                     SqlDataAdapter _dap = new SqlDataAdapter(_cmd);

//                     _con.Open();
//                     _dap.Fill(customerTable);
//                     _con.Close();

//                 }
//             }
//             return false;
//         }
//     }
// }
