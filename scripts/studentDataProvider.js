const arrayOfStudentObjects = [
    //----------------------------------------------- Row One -----------------------------------------------
    {
        name: "Alex Curnow",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USELPK6F5-a1fb95539806-512",
        id: "alexCurnow",
        row: "one"
    },
    {
        name: "Brennen Tatum",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USELQ58BD-81d4f217172a-512",
        id: "brennenTatum",
        row: "one"
    },
    {
        name: "Kristen Howton",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USELPMX7V-e5716dd9a473-512",
        id: "kristenHowton",
        row: "one"
    },
    {
        name: "Brad Cowart",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USDBD8HLJ-65f50807dcb2-512",
        id: "bradCowart",
        row: "one"
    },
    {
        name: "Michael Carroll",
        image: "https://ca.slack-edge.com/T03F2SDTJ-UTTV13457-e6f90cf6730d-512",
        id: "michaelCarroll",
        row: "one"
    },
    {
        name: "Crystal Elsey",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USRM1SZ7E-gd1c7c531d7b-512",
        id: "crystalElsey",
        row: "one"
    },
    {
        name: "Nick Glover",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USU0WK8K1-b30a6dcde8b8-512",
        id: "nickGlover",
        row: "one"
    },
    {
        name: "Daniel Fuqua",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USS5C35PX-g823ab3696e1-512",
        id: "danielFuqua",
        row: "one"
    },
    {
        name: "Traye Johnson",
        image: "https://ca.slack-edge.com/T03F2SDTJ-UMACCG05B-5775059ec468-512",
        id: "trayeJohnson",
        row: "one"
    },
    {
        name: "Daniel Hero",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USFUHRVC1-ead3a6e542fb-512",
        id: "danielHero",
        row: "one"
    },
    //----------------------------------------------- Row Two -----------------------------------------------
    {
        name: "Tyler Serafin",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USUB4Q2QN-g22075fe19b8-512",
        id: "tylerSerafin",
        row: "two"
    },
    {
        name: "Tim George",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USELPL2V9-ead1e86a4321-512",
        id: "timGeorge",
        row: "two"
    },
    {
        name: "Jon Durr",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USS5BR2TF-e17f3d2edc9b-512",
        id: "jonDurr",
        row: "two"
    },
    {
        name: "Mark McCann",
        image: "https://ca.slack-edge.com/T03F2SDTJ-UMC44CZQW-9ecdc4a8805d-512",
        id: "markMcCann",
        row: "two"
    },
    {
        name: "Jayson Rice",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USELPV97V-4270887f1a9f-512",
        id: "jaysonRice",
        row: "two"
    },
    {
        name: "Calvin Curry",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USS5BQPB7-0357859565af-512",
        id: "calvinCurry",
        row: "two"
    },
    {
        name: "Billy Blackman",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USRM1CFEG-eaff2a1cc758-512",
        id: "billyBlackman",
        row: "two"
    },
    {
        name: "Drew Harper",
        image: "https://ca.slack-edge.com/T03F2SDTJ-UU69WGM46-ga7cdb45708e-512",
        id: "drewHarper",
        row: "two"
    },
    {
        name: "Parker Hodge",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USS5C3V7F-4aa872d15b6a-512",
        id: "parkerHodge",
        row: "two"
    },
    {
        name: "Yitbarek 'Yohanes' Gitore",
        image: "https://ca.slack-edge.com/T03F2SDTJ-UKWJA655H-ga47eef202d9-512",
        id: "yitbarekGitore",
        row: "two"
    },
    //----------------------------------------------- Row Three -----------------------------------------------
    {
        name: "Blake Slochowsky",
        image: "https://ca.slack-edge.com/T03F2SDTJ-UJTHWEZRR-95c76c8d7053-512",
        id: "blakeSlochowsky",
        row: "three"
    },
    {
        name: "Brant Pippin",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USS521MU0-gda2f776c407-512",
        id: "brantPippin",
        row: "three"
    },
    {
        name: "Drew Kirkland",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USDBCMC0J-99a1633b45c3-512",
        id: "drewKirkland",
        row: "three"
    },
    {
        name: "Heidi Sprouse",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USS5BRFB7-9c869eebef27-512",
        id: "heidiSprouse",
        row: "three"
    },
    {
        name: "Thomas Long",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USELQ08AF-0c2410d64931-512",
        id: "thomasLong",
        row: "three"
    },
    {
        name: "Shady Grant",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USELQ6P99-38208751541b-512",
        id: "shadyGrant",
        row: "three"
    },
    {
        name: "Sarah Landolt",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USU0WL45V-4d1398c4c2fc-512",
        id: "sarahLandolt",
        row: "three"
    },
    {
        name: "Erika Montijo",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USFUHTL1F-7ecb49970dcd-512",
        id: "erikaMontijo",
        row: "three"
    },
    {
        name: "Ian Penn",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USELPKHPD-cea06fd3db57-512",
        id: "ianPenn",
        row: "three"
    },
    {
        name: "Derek Buckley",
        image: "https://ca.slack-edge.com/T03F2SDTJ-USRM1D1C4-453196a1d572-512",
        id: "derekBuckley",
        row: "three"
    },
];

export const useStudentData = () => {
    return arrayOfStudentObjects.slice();
}