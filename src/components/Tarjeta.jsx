
export const Tarjeta = ({ compania, cvv, fechaVencimiento, idTarjeta, numero, propietario, saldo, tipo }) => {
    return (
        <>
            <div className="flex flex-col bg-blue-300 text-black">
                <div className="flex justify-between mb-8">
                    <label>{compania}</label>
                    <label>{tipo}</label>
                </div>
                <div className="flex">
                    <label className="text-2xl">{numero}</label>
                </div>
                <label>Vence en: {fechaVencimiento}</label>
                <label>CVV: {cvv}</label>
                <label>Saldo: {saldo}</label>
                <label>Propietario: {propietario}</label>
            </div>
        </>
    )
}
