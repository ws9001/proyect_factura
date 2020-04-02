// inicialización de variables

let razon_social = $("#razon_social");
let fecha = $("#fecha");
let cant_item = $("#cant_item");
let descrip_item = $("#descrip_item");
let monto_item = $("#monto_item");
let btn_detalle = $("#btn_detalle");
let btn_imp = $("#btn_imp");
let txt_tot = $("#tot");

let total = 0;

// evento click del botón para agregar items
btn_detalle.click(agregaDetalle);

// funcion que agrega el detalle a la tabla
function agregaDetalle(){

	// se recuperan los valore ingresados
	let cant = parseInt( cant_item.val() );
	let desc = descrip_item.val();
	let mont = parseInt( monto_item.val() );

	// calculo para el subtotal y acumulador para total
	let subtot = cant * mont;
	total += subtot;

	// se cargan los valores en la tabla

	let plantilla = `<tr>
						<td>${cant}</td>
						<td>${desc}</td>
						<td>${subtot}</td>
					</tr>`;
	
	$("tbody").append(plantilla);
	txt_tot.text(total);

	// se limpian los campos
	cant_item.val("");
	descrip_item.val("");
	monto_item.val("");
	cant_item.focus();
}

// evento para el botón imprimir
btn_imp.click(imprime);

// funcion imprime
function imprime(){
	window.print();
}
