async function requestRealWithdrawal(amount, method) {
    const response = await fetch('https://ваш-api.com/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: webApp.initDataUnsafe.user.id, amount, method })
    });
    
    if (response.ok) {
        webApp.showAlert('Запрос успешно обработан!');
    } else {
        webApp.showAlert('Ошибка при выводе средств');
    }
}