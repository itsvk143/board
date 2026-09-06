import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode } from 'lucide-react';

export default function LatexSourceModal({ paper, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!paper) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(paper.latexSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy to clipboard', e);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([paper.latexSource], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${paper.id}.tex`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window latex-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <FileCode size={20} className="text-indigo-400" />
            <div>
              <h3 className="modal-title">Raw LaTeX Source Document</h3>
              <p className="modal-subtitle">{paper.title}</p>
            </div>
          </div>
          <div className="modal-header-actions">
            <button
              className={`action-btn-pill ${copied ? 'success' : ''}`}
              onClick={handleCopy}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied LaTeX!' : 'Copy LaTeX'}</span>
            </button>
            <button className="action-btn-pill" onClick={handleDownload}>
              <Download size={14} />
              <span>Download .tex</span>
            </button>
            <button className="modal-close-icon" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body">
          <pre className="latex-code-block">
            <code>{paper.latexSource}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
