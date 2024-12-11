<script>
    function openPDF(file) {
        const pdfFrame = document.getElementById('pdfFrame');
        pdfFrame.style.opacity = '0';
        setTimeout(() => {
            pdfFrame.src = file;
            pdfFrame.onload = () => {
                pdfFrame.style.opacity = '1';
            };
        }, 300);
    }
</script>
