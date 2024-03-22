const rym = fetch('https://rickandmortyapi.com/documentation/#get-a-single-character');

rym
.then((result) => {
    return result.json();
})
.then((data) => {
    console.log (data);
})
.catch((error) => {
    console.log (error);
});

const rym2 = fetch ('https://rickandmortyapi.com/documentation/#get-a-single-character')

const result = rym2.then((res)=> {
    return res.json();
});

result.then((data) => {
    console.log(data.name);
});

const getRym = async () => {
 try {
    const getData = await fetch('https://rickandmortyapi.com/documentation/#get-a-single-character').then((res) => res.json());
    return getData.name;
 } catch (error) {
    console.log(error);
 }
};
