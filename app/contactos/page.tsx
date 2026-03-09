import ContactInfoCards from "@/components/contactos/ContactInfoCards";
import FormularioContato from "@/components/contactos/FormularioContacto";
import HeroContactos from "@/components/contactos/HeroContactos";
import MapaLocalizacao from "@/components/contactos/MapaLocalizacao";

export default function Contactos() {
  return (
    <>
      <HeroContactos />
      <ContactInfoCards />
      <FormularioContato />
      <MapaLocalizacao />
    </>
  );
}
