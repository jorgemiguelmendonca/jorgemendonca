import ContactInfoCards from "@/components/contactos/ContactInfoCards";
import FormularioContato from "@/components/contactos/FormularioContacto";
import HeroContactos from "@/components/contactos/HeroContactos";

export default function Contactos() {
  return (
    <>
      <HeroContactos />
      <ContactInfoCards />
      <FormularioContato />
    </>
  );
}
