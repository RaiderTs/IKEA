export const getData = {
    url: 'database/dataBase.json',
    get(process) {
        fetch(this.url)
            .then((response) => { responce.json() })
    },
};
getData.get() 