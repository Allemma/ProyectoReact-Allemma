import React from 'react';
import Button from './Buttons/Button';

export default function NavBar() {
  return (
    <>
    <h1>E-commerce</h1>
      <Button text="Inicio" />
      <Button text="Nosotros" />
      <Button text="Productos" />
      <Button text="Blog" />
      <Button text="Contacto" />
    </>
  );
}
