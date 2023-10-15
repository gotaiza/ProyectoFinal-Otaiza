const URL_API = 'https://fakestoreapi.com';

let getAllProducts = () => {
    let products;

    axios.get(URL_API + '/products', {
        responseType: 'json'
    }).then(function (res) {
        if (res.status === 200) {
            productos = res.data;
        }
        console.log(res);
    }).catch(function (err) {
        console.log('Error de conexion ' + err);
    });

    return products;
}
