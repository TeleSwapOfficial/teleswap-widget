import React from 'react';
import type { FC } from 'react';

export interface TeleswapWidgetProps {
  fromCoin?: string;
  toCoin?: string;
  theme?: 'light' | 'dark';
  apiKey: string;
  width?: number;
  height?: number;
  buttonColor?: string;
  borderColor?: string;
  logoUrl?: string;
}

export const TeleswapWidget: React.FC<TeleswapWidgetProps> = ({
  fromCoin = 'sol',
  toCoin = 'ton',
  theme = 'light',
  apiKey,
  width = 360,
  height = 300,
  buttonColor,
  borderColor,
  logoUrl,
}) => {
  const baseUrl = 'https://widget.teleswap.io/';
  const params = new URLSearchParams({
    fromCoin,
    toCoin,
    theme,
    apiKey,
  });
  if (width < 360) width = 360;
  if (height < 300) height = 350;
  if (buttonColor) params.append('buttonColor', buttonColor);
  if (borderColor) params.append('borderColor', borderColor);
  if (logoUrl) params.append('logoUrl', logoUrl);

  const url = `${baseUrl}?${params.toString()}`;

  return (
    <div
      className="teleswap-container"
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <iframe
        src={url}
        className="teleswap-iframe"
        frameBorder="0"
        allowTransparency={true}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '12px',
        }}
      />
    </div>
  );
};
