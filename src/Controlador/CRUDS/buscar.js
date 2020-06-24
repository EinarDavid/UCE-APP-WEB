module.exports = (arreglo,filtro)=>
{
 // console.log(arreglo);
  for (var atr in filtro) {
    if (filtro.hasOwnProperty(atr)) {
        switch (filtro[atr].tipo) {
          case 'rango':
            arreglo = arreglo.filter(ele => ele[atr] >= filtro[atr].min && ele[atr] <= filtro[atr].max);
            break;
          case 'igual':
            arreglo = arreglo.filter(ele => ele[atr] == filtro[atr].valor);
            break;
          case 'contieneString':
            arreglo = arreglo.filter(ele =>
              {
                if(ele[atr]!=undefined)
                {
                    if(ele[atr].toString().includes(filtro[atr].valor))
                    {
                        //console.log(ele[atr].toString().includes(filtro[atr].valor))
                        return ele[atr].toString().includes(filtro[atr].valor)
                    }
                     
                }
                 
              });
            break;
        }

    }
  }
  return arreglo;
}