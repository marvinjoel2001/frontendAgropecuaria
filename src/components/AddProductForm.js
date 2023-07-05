import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const AddProductForm = ({ apiEndpoint }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        stock: 0,
        fecha_creacion: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Producto agregado exitosamente');
                alert("Producto agregado exitosamente");
                window.location.reload();
                // Aquí puedes realizar alguna acción adicional, como recargar la lista de productos
                // o mostrar un mensaje de éxito.
            } else {
                alert("Ocurrio un error al agregar producto");
                console.error('Error al agregar el producto');
                // Aquí puedes manejar el error de alguna manera, como mostrar un mensaje de error.
            }
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input type="text" id="nombre" name="nombre" className="form-control" value={formData.nombre} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio:</label>
                <input type="text" id="precio" name="precio" className="form-control" value={formData.precio} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción:</label>
                <input type="text" id="descripcion" name="descripcion" className="form-control" value={formData.descripcion} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="stock" className="form-label">Stock:</label>
                <input type="number" id="stock" name="stock" className="form-control" value={formData.stock} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="fecha_creacion" className="form-label">Fecha de Creación:</label>
                <input type="datetime-local" id="fecha_creacion" name="fecha_creacion" className="form-control" value={formData.fecha_creacion} onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    );
};

export default AddProductForm;
