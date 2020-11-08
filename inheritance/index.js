// inherintance adalah konsep pada OOP yang dimana kita bisa turunkan sifat (property dan method) pada sebuah class (ibu / orang tua) ke class turunanya (anak)

class Hewan {
  nama;

  constructor(nama) {
    this.nama = nama;
  }

  kenalan() {
    console.log(`Hallo, nama saya ${this.nama}`);
  }
}

class Carnivora extends Hewan {
  makanan;

  constructor(makanan, nama) {
    // Digunakan untuk mengirim nilai ke constructor parent (orang tua)
    super(nama);
    this.makanan = makanan;
  }

  makan() {
    console.log(`${this.nama} sedang memakan ${this.makanan}`);
  }

  kenalan() {
    console.log('Hallo');
  }
}

const singa = new Carnivora('Manusia', 'Leo');

singa.kenalan();
singa.makan();

// Visibiliy
/*

public, bisa di akses dimana saja
protected, hanya bisa di akses oleh class parent dan turunanaya(jika ada)
private, hanya di bisa di akses oleh class itu sendiri

*/
