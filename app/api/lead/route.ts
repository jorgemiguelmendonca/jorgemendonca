import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
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
  <div style="font-family:Arial;max-width:700px;margin:auto">

    <h2 style="color:#1A2B4C;">
      Nova Pré-Análise de Crédito
    </h2>

    <hr/>

    <table style="width:100%;border-collapse:collapse">

      <tr>
        <td style="padding:10px;border:1px solid #ddd;">
          <b>Nome</b>
        </td>
        <td style="padding:10px;border:1px solid #ddd;">
          ${data?.nome || "-"}
        </td>
      </tr>

      <tr>
        <td style="padding:10px;border:1px solid #ddd;">
          <b>Email</b>
        </td>
        <td style="padding:10px;border:1px solid #ddd;">
          ${data?.email || "-"}
        </td>
      </tr>

      <tr>
        <td style="padding:10px;border:1px solid #ddd;">
          <b>WhatsApp</b>
        </td>
        <td style="padding:10px;border:1px solid #ddd;">
          ${data?.whatsapp || "-"}
        </td>
      </tr>

      <tr>
        <td style="padding:10px;border:1px solid #ddd;">
          <b>Tipo de Crédito</b>
        </td>
        <td style="padding:10px;border:1px solid #ddd;">
          ${data?.tipo || "-"}
        </td>
      </tr>

      <tr>
        <td style="padding:10px;border:1px solid #ddd;">
          <b>Valor Pretendido</b>
        </td>
        <td style="padding:10px;border:1px solid #ddd;">
          € ${Number(data?.valor || 0).toLocaleString("pt-PT")}
        </td>
      </tr>

      <tr>
        <td style="padding:10px;border:1px solid #ddd;">
          <b>Prazo</b>
        </td>
        <td style="padding:10px;border:1px solid #ddd;">
          ${data?.prazo || 120} meses
        </td>
      </tr>

      <tr>
        <td style="padding:10px;border:1px solid #ddd;">
          <b>Prestação Estimada</b>
        </td>
        <td style="padding:10px;border:1px solid #ddd;color:green;font-weight:bold;">
          € ${Number(data?.prestacao || 0).toLocaleString("pt-PT")}
        </td>
      </tr>

    </table>

  </div>
  `;
    }
    // =========================
    // SIMULAÇÃO (CORRIGIDO)
    // =========================
    if (formType === "simulacao") {
      subject = "Nova Simulação de Crédito";

      html = `
  <div style="font-family:Arial;max-width:600px;margin:auto">

  <h2 style="color:#1A2B4C;">Nova Simulação de Crédito</h2>

  <hr/>

  <h3 style="color:#c5a059;">Dados de Contacto</h3>

  <table style="width:100%;border-collapse:collapse">

  <tr>
  <td style="padding:8px;border:1px solid #ddd;"><b>Nome</b></td>
  <td style="padding:8px;border:1px solid #ddd;">${data?.name || "-"}</td>
  </tr>

  <tr>
  <td style="padding:8px;border:1px solid #ddd;"><b>Telefone</b></td>
  <td style="padding:8px;border:1px solid #ddd;">${data?.phone || "-"}</td>
  </tr>

  <tr>
  <td style="padding:8px;border:1px solid #ddd;"><b>Email</b></td>
  <td style="padding:8px;border:1px solid #ddd;">${data?.email || "Não informado"}</td>
  </tr>

  </table>

  <h3 style="color:#c5a059;">Dados da Simulação</h3>

  <table style="width:100%;border-collapse:collapse">

  <tr>
  <td style="padding:8px;border:1px solid #ddd;"><b>Tipo de Crédito</b></td>
  <td style="padding:8px;border:1px solid #ddd;">${data?.creditType || "-"}</td>
  </tr>

  <tr>
  <td style="padding:8px;border:1px solid #ddd;"><b>Valor a Financiar</b></td>
  <td style="padding:8px;border:1px solid #ddd;">${data?.amount || "-"}</td>
  </tr>

 

  <tr>
  <td style="padding:8px;border:1px solid #ddd;"><b>Prazo de Pagamento</b></td>
  <td style="padding:8px;border:1px solid #ddd;">${data?.prazo || "-"} meses</td>
  </tr>

  </table>

  <br/>

  

  </div>
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
        <p><b>Prazo de Pagamento:</b> €${data?.prazo || "-"} meses</p>
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
      from: "Jorge Miguel Mendonça <intermediario@jorgemendonca.com>",
      to: "intermediario@jorgemendonca.com",
      subject,
      html,
      replyTo: data?.email || undefined,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json({ success: false });
  }
}
