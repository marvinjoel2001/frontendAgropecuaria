import React from 'react';

const FormularioVenta = () => {
    return (
        <div className="modal fade" id="formularioArticulo" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="hidden" id="codigo" />
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Descripción:</label>
                                <input type="text" id="descripcion" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Precio:</label>
                                <input type="number" id="precio" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Categoría:</label>
                                <select id="categoria" className="form-control"></select>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="confirmarAgregar" className="btn btn-success">Agregar</button>
                        <button type="button" id="confirmarModificar" className="btn btn-success">Modificar</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioVenta;