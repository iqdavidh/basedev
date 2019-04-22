let Person= require("../src/scripts/person");



describe("Constructor", function () {

    let nombre="bart simpson";
    let p = Person.factory(nombre);

    it("el nombre del constructor debe estar en la propiedad ", function () {        
        expect( nombre === p.nombre ).toBe(true);
    });
   
});



describe("getNombre", function () {

    let nombre="bart simpson";
    let p = Person.factory(nombre);

    it("devuelve el nombre", function () {        
        expect( nombre === p.getNombre() ).toBe(true);
    });
   
});

