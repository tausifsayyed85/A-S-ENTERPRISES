import React from 'react';
import { ProductSpecification } from '../data/productsData';

interface TechnicalSpecTableProps {
  specifications: ProductSpecification[];
  title?: string;
}

export const TechnicalSpecTable: React.FC<TechnicalSpecTableProps> = ({ 
  specifications, 
  title = "Technical Specifications" 
}) => {
  return (
    <div className="border border-slate-200 bg-white rounded-sm overflow-hidden shadow-xs">
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <h4 className="text-xs uppercase tracking-wider font-bold text-white font-display">
          {title}
        </h4>
        <span className="text-[11px] font-mono text-slate-400">
          Standard Specifications
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
              <th className="py-2.5 px-4 w-1/3 border-r border-slate-200">Specification Parameter</th>
              <th className="py-2.5 px-4">Standard Engineering Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {specifications.map((spec, index) => (
              <tr 
                key={index} 
                className={index % 2 === 0 ? 'bg-white hover:bg-slate-50/80 transition-colors' : 'bg-slate-50/50 hover:bg-slate-50/80 transition-colors'}
              >
                <td className="py-2.5 px-4 font-semibold text-slate-800 border-r border-slate-100">
                  {spec.label}
                </td>
                <td className="py-2.5 px-4 font-mono text-slate-700 tabular-nums">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
