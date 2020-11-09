import React from "react";

const numbers = [
  {
    nombre:
      "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/81486952_2511181069162600_6735143597898727424_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=RE8uane_5QoAX_hM4EX&_nc_ht=scontent.feoh1-1.fna&oh=b6c100264885bf464474f7242246dbfd&oe=5FAD12F5",
    apellido: "Hellen "
  },
  {
    nombre:
      "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/119990760_2425101061125698_7684376015421129686_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=pQJxUeWkJIAAX9g3Wbt&_nc_ht=scontent.feoh1-1.fna&oh=d39eac05625cd2f4b222265e79757448&oe=5FAE32A1",
    apellido: "Manuela"
  },
  {
    nombre:
      "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/76249057_1377615569070794_3618221595660648448_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=AnuWxfVQaowAX8VP-JW&_nc_ht=scontent.feoh1-1.fna&oh=ba4870ae654cfdf0658f6cef18a1667b&oe=5FAF46B2",
    apellido: "Jimena "
  },
  {
    nombre:
      "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/116089777_2792761090952436_930075042983075477_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=dRGnFSszrtoAX-kr6Eq&_nc_ht=scontent.feoh1-1.fna&oh=0a47733c67a6ec3802612eda5fbd10f2&oe=5FAFD7AE",
    apellido: "Fernanda "
  }
];

export default function Plus() {
  return (
    <>
      {numbers.map((data) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}>
          <div>
            <img
              src={data.nombre}
              alt="perrito"
              className="card-img-top card-img rounded-circle"
            />
            <div className="card-body">
              <p className="card-text text-center">{data.apellido}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
