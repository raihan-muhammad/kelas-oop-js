// Setter dan getter adalah sebuah property accessor yang digunakan untuk men-set dan men-get data pada property.

class Person2 {
  _nama = 'Raihan';
  umur = 19;

  set nama(value) {
    this._nama = value;
  }

  get nama() {
    console.log('Tes');
    return `Hallo, nama baru saya adalah ${this._nama}`;
  }

  kenalan() {
    console.log(`Hallo, nama saya ${this._nama} umur saya ${this.umur}`);
  }
}

const person2 = new Person2();
person = 'Michael';
person2.nama;

person2.kenalan();
