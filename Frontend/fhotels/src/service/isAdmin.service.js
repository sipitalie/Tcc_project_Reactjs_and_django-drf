export default function IsAdminHotel(id_hotel){
    let HoteisId=[]
    let arrayIsAdmin=[]

    try {
        // Parse a JSON
        HoteisId = JSON.parse(localStorage.getItem("isAdmin"));
    } catch (e) {
        HoteisId = localStorage.getItem("isAdmin");
    }
    arrayIsAdmin=HoteisId.map((idhotel)=>{return idhotel.id});
    return arrayIsAdmin.includes(parseInt(id_hotel))?true:false;
};
 

