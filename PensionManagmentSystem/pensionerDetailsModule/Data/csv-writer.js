 const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: "details.csv",
    header: [ 
        {id: "id", title: "id" },
        {id: "Aadhaar", title: "Aadhaar" },
        {id: "Name", title: "Name" },
        {id: "DOB", title: "DOB" },
        {id: "PAN", title: "Pan" },
        {id: "SalaryEarned", title: "SalaryEarned" },
        {id: "Allowences", title: "Allowences" },
        {id: "SelforFamilyPension", title: "SelforFamilyPension" },
        {id: "Bank", title: "Bank" },
        {id: "AccountNumber", title: "AccountNumber" },
        {id: "PublicorPrivateBank", title: "PublicorPrivateBank" },
        
           ]
});

const records = [
{id: 1, Aadhaar : 999991, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:'NA',
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 2, Aadhaar : 999992, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 3, Aadhaar : 999993, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 4, Aadhaar : 999994, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 5, Aadhaar : 999995, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 6, Aadhaar : 999996, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 7, Aadhaar : 999997, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 8, Aadhaar : 999998, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 9, Aadhaar : 999999, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 10, Aadhaar : 9999910, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 11, Aadhaar : 9999911, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 12, Aadhaar : 9999912, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 13, Aadhaar : 9999913, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 14, Aadhaar : 9999914, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 15, Aadhaar : 9999915, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 16, Aadhaar : 9999916, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 17, Aadhaar : 9999917, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 18, Aadhaar : 9999918, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 19, Aadhaar : 9999919, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },
{id: 20, Aadhaar : 9999920, Name: 'Paul Gallagher', DOB: 84-05-28, PAN: 364758374, SalaryEarned: 62000, Allowences:200,
SelforFamilyPension: "Self", Bank: 'BOI',AccountNumber: 8475635, PublicorPrivateBank: "Private"    },


];

csvWriter.writeRecords(records)
.then(() => {
    console.log('file created')

})

module.exports = records;