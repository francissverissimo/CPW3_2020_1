// Todas as informações da tabela
let copa2018 = new Copa('França', '2018', 'Didier Deschamps', 'Croácia');
let copa2014 = new Copa('Alemanha', '2014', 'Joaquim Lowe', 'Argentina');
let copa2010 = new Copa('Espanha', '2010', 'Vicente Del Bosque', 'Holando');
let copa2006 = new Copa('Itália', '2006', 'Marcello Lippi', 'França');
let copa2002 = new Copa('Brasil', '2002', 'Luiz Felipe Escolari', 'Alemanha');
let copa1998 = new Copa('França', '1998', 'Aimé Jacque', 'Brasil');
let copa1994 = new Copa('Brasil', '1994', 'Carlos Alberto Pereira', 'Itália');
let copa1990 = new Copa('Alemanha Ocidental', '1990', 'Franz Beckenbauer', 'Argentina');
let copa1986 = new Copa('Argentina', '1986', 'Carlos Bilardo', 'Alemanha Ocidental');
let copa1982 = new Copa('Itália', '1982', 'Enzo Bearzot', 'Alemanha Ocidental');
let copa1978 = new Copa('Argentina', '1978', 'Cezar Luiz Menotti','Holanda');
let copa1974 = new Copa('Alemanha Ocidental', '1974', 'Helmut Schoen', 'Holanda');
let copa1970 = new Copa('Brasil', '1970', 'Mario Zagalo', 'Itália');
let copa1966 = new Copa('Inglaterra', '1966', 'Alfred Ramsey', 'Alemanha Ocidental');
let copa1962 = new Copa('Brasil', '1962', 'Aymoré Moreira', 'Tchecoslovaquia');
let copa1958 = new Copa('Brasil', '1958', 'Vincente Feola', 'Suécia');
let copa1954 = new Copa('Alemanha Ocidental', '1954', 'Sepp Herberger', 'Hungria');
let copa1950 = new Copa('Uruguai', '1950', 'Juan Lopez', 'Brasil');
let copa1938 = new Copa('Itália', '1938', 'Vittorio Pozzo', 'Hungria');
let copa1934 = new Copa('Itália', '1934', 'Vittorio Pozzo', 'Tchecoslovaquia');
let copa1930 = new Copa('Uruguai', '1930', 'Alberto Suppici', 'Argentina');

// Vetor com todas as variáveis de cada edição da copa
var campeoes = [
    copa2018, copa2014, copa2010, copa2006,
    copa2002, copa1998, copa1994, copa1990,
    copa1986, copa1982, copa1978, copa1974,
    copa1970, copa1966, copa1962, copa1958,
    copa1954, copa1950, copa1938, copa1934,
    copa1930
];

var copaView = new CopaView(campeoes);