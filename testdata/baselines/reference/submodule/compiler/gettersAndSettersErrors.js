//// [tests/cases/compiler/gettersAndSettersErrors.ts] ////

//// [gettersAndSettersErrors.ts]
class C {
    public get Foo() { return "foo";} // ok
    public set Foo(foo:string) {} // ok

    public Foo = 0; // error - duplicate identifier Foo - confirmed
    public get Goo(v:string):string {return null;} // error - getters must not have a parameter
    public set Goo(v:string):string {} // error - setters must not specify a return type
}

class E {
    private get Baz():number { return 0; }
    public set Baz(n:number) {} // error - accessors do not agree in visibility
}




//// [gettersAndSettersErrors.js]
class C {
    get Foo() { return "foo"; }
    set Foo(foo) { }
    Foo = 0;
    get Goo(v) { return null; }
    set Goo(v) { }
}
class E {
    get Baz() { return 0; }
    set Baz(n) { }
}
