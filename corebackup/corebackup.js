/* =========================================
   LÓGICA DO CUSTOMIZADOR DO APP BACKUP
   ========================================= */

document.addEventListener("DOMContentLoaded", function() {

    // --- Referências aos Controles (Inputs) ---
    const appNameInput = document.getElementById('appName');
    const logoUpload = document.getElementById('appLogo');
    const removeLogoBtn = document.getElementById('removeLogoBtn');
    const bgColorPicker = document.getElementById('bgColor');
    const btnColorPicker = document.getElementById('btnColor');

    // --- Referências ao Preview (Janela Fake) ---
    const windowTitleText = document.getElementById('windowTitleText');
    const previewName = document.getElementById('previewName');
    const previewImage = document.getElementById('previewImage');
    const windowContent = document.getElementById('windowContent');
    const previewBtn = document.getElementById('previewBtn');

    // 1. Alterar Nome do App (Texto)
    appNameInput.addEventListener('input', function(e) {
        const newName = e.target.value || "CoreBackup"; // Fallback se ficar vazio
        previewName.textContent = newName;
        windowTitleText.textContent = `Login - ${newName}`;
    });

    // 2. Fazer Upload da Imagem (Substitui o Texto)
    logoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                // Esconde o texto e mostra a imagem com a URL gerada
                previewName.style.display = 'none';
                previewImage.src = event.target.result;
                previewImage.style.display = 'block';
                
                // Mostra o botão de remover imagem
                removeLogoBtn.style.display = 'inline-block';
            }
            
            reader.readAsDataURL(file); // Lê a imagem do PC do usuário temporariamente
        }
    });

    // 3. Remover Imagem e voltar pro Texto
    removeLogoBtn.addEventListener('click', function() {
        // Limpa o input de arquivo
        logoUpload.value = ''; 
        
        // Esconde a imagem e volta o texto
        previewImage.style.display = 'none';
        previewImage.src = '';
        previewName.style.display = 'block';
        
        // Esconde o próprio botão
        this.style.display = 'none';
    });

    // 4. Alterar Cor de Fundo da Janela
    bgColorPicker.addEventListener('input', function(e) {
        windowContent.style.backgroundColor = e.target.value;
    });

    // 5. Alterar Cor do Botão ENTRAR
    btnColorPicker.addEventListener('input', function(e) {
        previewBtn.style.backgroundColor = e.target.value;
    });

<<<<<<< HEAD:corebackup/coreBackup.js
// --- Referências da Nuvem ---
    const cloudProviderSelect = document.getElementById('cloudProvider');
    const previewCloudText = document.getElementById('previewCloud');

    // 6. Alterar o Provedor de Nuvem no Rodapé
    if (cloudProviderSelect && previewCloudText) {
        cloudProviderSelect.addEventListener('change', function(e) {
            // Pega o valor (texto) selecionado e joga no rodapé do mockup
            previewCloudText.textContent = e.target.value;
            
            // Dá um pequeno efeito visual de "piscar" para mostrar que mudou
            previewCloudText.style.opacity = 0;
            setTimeout(() => {
                previewCloudText.style.opacity = 1;
                previewCloudText.style.transition = "opacity 0.3s ease";
            }, 100);
        });
    }

});
=======
});
>>>>>>> ef9f5bc012b15a7043f78572c27c31d3d83b8f43:corebackup/corebackup.js
