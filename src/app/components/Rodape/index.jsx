import React from 'react';
import Image from 'next/image';

const Rodape = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px' }}>
            <div>
                <Image src="/path/to/your/image.jpg" alt="Description" layout="responsive" width={500} height={300} />
            </div>
            <div>
                <p>Este é um parágrafo abaixo da imagem.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div style={{ marginTop: '20px' }}>
                <p>Autor do projeto: Seu Nome</p>
            </div>
        </footer>
    );
};

export default Rodape;