async function getUser(chat_id){
    let answer = await fetch(`/api2/user/${chat_id}`, {
        method: 'GET'
    })

    return await answer.json();
}


async function addWallet(wallet, chat_id){
    let answer = await fetch(`/api2/user-wallet`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chatId: chat_id,
            wallet: wallet
        })
    })

    return await answer.json();
}


async function getSettings(){
    let answer = await fetch(`/api2/cost`, {
        method: 'GET',
    })

    return await answer.json();
}


async function getTrxs(chatId){
    let answer = await fetch(`/api2/get-width/${chatId}`, {
        method: 'GET',
    })

    return await answer.json();
}

async function reqTrx(chatId,amount){
    let answer = await fetch(`/api2/req-width`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: chatId,
            amount: amount
        })
    })

    return await answer.json();
}

async function depositA(chat_id, deposit, boc){
    let answer = await fetch(`/api2/deposit`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chatId: chat_id,
            deposit: deposit,
            boc: boc
        })
    })

    return await answer.json();
}

async function buyIce(chat_id, id){
    let answer = await fetch(`/api2/buyice`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chatId: chat_id,
            id: id
        })
    })

    return await answer.json();
}


async function claimToken(chat_id){
    let answer = await fetch(`/api2/claim-token/${chat_id}`, {
        method: 'GET',
    })

    return '';
}


async function getProduct(){
    let answer = await fetch(`/api2/product`, {
        method: 'GET',
    })

    return '';
}