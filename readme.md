# 🌅 Aurora

<div align="center">

![Aurora Banner](https://img.shields.io/badge/Aurora-Project-blue?style=for-the-badge&logo=react)

### 🚧 Projeto em Desenvolvimento

**Tempo de desenvolvimento:** <span id="dev-counter">Calculando...</span>

---

### 📱 Aplicativo de Metas e Rotinas

Um aplicativo React Native para gerenciamento de metas pessoais e rotinas diárias.

---

### 🛠️ Tecnologias

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react-native&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

### 📄 Licença

Este projeto está licenciado sob a **MIT License - Educational Use Only**.

**⚠️ Uso comercial estritamente proibido.**

[Ver licença completa](LICENSE)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

</div>

</div>

<script>
// Contador de desenvolvimento
function updateCounter() {
    const startDate = new Date('2024-01-15'); // Ajuste para a data real do início
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const remainingDays = diffDays % 7;
    
    const counterElement = document.getElementById('dev-counter');
    if (counterElement) {
        counterElement.innerHTML = `<strong>${diffWeeks} semanas e ${remainingDays} dias</strong>`;
    }
}

// Atualiza o contador quando a página carrega
document.addEventListener('DOMContentLoaded', updateCounter);
</script>
