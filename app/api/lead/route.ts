import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, data } = body;

    let subject = "";
    let html = "";

    // =========================
    // PRÉ-ANÁLISE
    // =========================
    if (formType === "pre-analise") {
      subject = "Nova Pré-Análise de Crédito";

      html = `
        <h2>Nova Pré-Análise</h2>

        <p><b>Nome:</b> ${data?.nome || "-"}</p>
        <p><b>WhatsApp:</b> ${data?.whatsapp || "-"}</p>
        <p><b>Tipo de Crédito:</b> ${data?.tipo || "-"}</p>
        <p><b>Valor Pretendido:</b> €${data?.valor || "-"}</p>
        <p><b>Rendimento Mensal:</b> €${data?.renda || "-"}</p>
      `;
    }

    // =========================
    // SIMULAÇÃO (CORRIGIDO)
    // =========================
    if (formType === "simulacao") {
      subject = "Nova Simulação";

      html = `
        <h2>Simulação de Crédito</h2>

        <p><b>Tipo de Crédito:</b> ${data?.creditType || "-"}</p>
        <p><b>Valor Pretendido:</b> €${data?.amount || "-"}</p>
        <p><b>Rendimento Mensal:</b> €${data?.income || "-"}</p>
        <p><b>Situação Profissional:</b> ${data?.employment || "-"}</p>

        <hr/>

        <h3>Dados de Contacto</h3>

        <p><b>Nome:</b> ${data?.name || "-"}</p>
        <p><b>Email:</b> ${data?.email || "-"}</p>
        <p><b>Telefone:</b> ${data?.phone || "-"}</p>
      `;
    }

    // =========================
    // FORMULÁRIO HERO (HOME)
    // =========================
    if (formType === "hero") {
      subject = "Pedido de Simulação (Homepage)";

      html = `
        <h2>Pedido via Homepage</h2>

        <p><b>Tipo de Crédito:</b> ${data?.creditType || "-"}</p>
        <p><b>Valor Pretendido:</b> €${data?.amount || "-"}</p>
        <p><b>Rendimento Mensal:</b> €${data?.income || "-"}</p>
      `;
    }

    if (formType === "credit-simulator") {
      subject = "Nova Simulação pelo Simulador";

      html = `
    <h2>Simulação de Crédito</h2>

    <p><b>Tipo de Crédito:</b> ${data?.tipo || "-"}</p>
    <p><b>Valor Pretendido:</b> €${data?.valor || "-"}</p>
    <p><b>Prazo:</b> ${data?.prazo || "-"} anos</p>

    <hr/>

    <h3>Resultado da Simulação</h3>

    <p><b>Prestação Estimada:</b> €${data?.prestacao || "-"}</p>
  `;
    }

    // =========================
    // ENVIO DO EMAIL
    // =========================
    await resend.emails.send({
      from: "Jorge Miguel Mendonça <onboarding@resend.dev>",
      to: "clintindossites@gmail.com",
      subject,
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json({ success: false });
  }
}
