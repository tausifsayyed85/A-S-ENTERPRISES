import React, { useState } from 'react';
import { GateMotorModel } from '../data/productsData';

interface GateMotorTableProps {
  models: GateMotorModel[];
  type: 'sliding' | 'swing';
}

export const GateMotorTable: React.FC<GateMotorTableProps> = ({ models, type }) => {
  const [selectedModel, setSelectedModel] = useState<string>(models[0]?.model || '');

  return (
    <div className="border border-slate-200 bg-white rounded-sm overflow-hidden shadow-xs my-6">
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h4 className="text-xs uppercase tracking-wider font-bold text-white font-display">
            {type === 'sliding' ? 'Sliding Gate Opener Models & Technical Details' : 'Swing Gate Opener Models & Technical Details'}
          </h4>
          <p className="text-[11px] text-slate-400">
            Source: Doorwin Engineering specifications as referenced in catalogue
          </p>
        </div>

        {/* Quick model selector for mobile */}
        <div className="sm:hidden flex items-center gap-1 overflow-x-auto py-1">
          {models.map((m) => (
            <button
              key={m.model}
              onClick={() => setSelectedModel(m.model)}
              className={`px-2 py-1 text-xs font-mono rounded-xs shrink-0 ${
                selectedModel === m.model ? 'bg-[#0F4C81] text-white' : 'bg-slate-800 text-slate-300'
              }`}
            >
              {m.model}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop / Tablet Full Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold uppercase tracking-wider">
              <th className="py-3 px-4 sticky left-0 bg-slate-100 border-r border-slate-200 min-w-[180px]">
                Parameter / Feature
              </th>
              {models.map((m) => (
                <th 
                  key={m.model} 
                  className={`py-3 px-4 min-w-[130px] font-mono text-center border-r border-slate-200 last:border-r-0 ${
                    m.model === selectedModel ? 'bg-blue-50 text-[#0F4C81]' : ''
                  }`}
                >
                  <span className="block font-bold text-sm text-slate-900">{m.model}</span>
                  <span className="block text-[11px] font-normal text-slate-500 mt-0.5">{m.capacity}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {type === 'sliding' ? (
              <>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-white border-r border-slate-100">
                    Max Gate Weight
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700 tabular-nums">
                      {m.capacity}
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50/40 hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-slate-50/40 border-r border-slate-100">
                    Power Supply
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700">
                      {m.powerSupply || '—'}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-white border-r border-slate-100">
                    Motor Output
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700 font-semibold">
                      {m.motorOutput}
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50/40 hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-slate-50/40 border-r border-slate-100">
                    Motor Speed
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700">
                      {m.motorSpeed || '—'}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-white border-r border-slate-100">
                    Output Torque
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700 font-semibold">
                      {m.outputTorque || '—'}
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50/40 hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-slate-50/40 border-r border-slate-100">
                    Gate Operation Speed
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700">
                      {m.operatingSpeed}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-white border-r border-slate-100">
                    Noise Rating
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700">
                      {m.noise || '—'}
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50/40 hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-slate-50/40 border-r border-slate-100">
                    Duty Cycle
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700">
                      {m.dutyCycle || '—'}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-white border-r border-slate-100">
                    Operating Temperature
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700">
                      {m.tempRange}
                    </td>
                  ))}
                </tr>
              </>
            ) : (
              <>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-white border-r border-slate-100">
                    Max Gate Weight
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700 tabular-nums">
                      {m.capacity}
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50/40 hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-slate-50/40 border-r border-slate-100">
                    Max Gate Width
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700 font-semibold">
                      {m.maxGateWidth || '—'}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-white border-r border-slate-100">
                    Operating Voltage
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700">
                      {m.powerSupply || '—'}
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50/40 hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-slate-50/40 border-r border-slate-100">
                    Motor Output
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700 font-semibold">
                      {m.motorOutput}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-white border-r border-slate-100">
                    Opening Speed (90°)
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700">
                      {m.operatingSpeed}
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50/40 hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-slate-50/40 border-r border-slate-100">
                    Battery Backup
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700 text-[11px]">
                      {m.batteryBackup || 'N.A.'}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-white border-r border-slate-100">
                    Manual Operation
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700">
                      Special Key Release
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50/40 hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800 sticky left-0 bg-slate-50/40 border-r border-slate-100">
                    Safety Clutch
                  </td>
                  {models.map((m) => (
                    <td key={m.model} className="py-2.5 px-4 font-mono text-center text-slate-700">
                      Hi -AMP auto stop
                    </td>
                  ))}
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
