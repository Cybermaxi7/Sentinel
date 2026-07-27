import { Module } from '@nestjs/common';
import { ReputationController } from './reputation.controller';
import {
  ReputationService,
  CHAIN_DATA_PROVIDER,
  INCIDENT_DATA_PROVIDER,
} from './reputation.service';
import { ReputationCalculatorService } from './services/reputation-calculator.service';
import { RiskIndicatorService, SANCTIONS_LIST_PROVIDER } from './services/risk-indicator.service';
import { ReputationRepository } from './repository/reputation.repository';
import { StubChainDataProvider } from './providers/stub-chain-data.provider';
import { StubIncidentDataProvider } from './providers/stub-incident-data.provider';
import { StubSanctionsListProvider } from './providers/stub-sanctions-list.provider';

@Module({
  controllers: [ReputationController],
  providers: [
    ReputationService,
    ReputationCalculatorService,
    RiskIndicatorService,
    ReputationRepository,
    { provide: CHAIN_DATA_PROVIDER, useClass: StubChainDataProvider },
    { provide: INCIDENT_DATA_PROVIDER, useClass: StubIncidentDataProvider },
    { provide: SANCTIONS_LIST_PROVIDER, useClass: StubSanctionsListProvider },
  ],
  exports: [ReputationService],
})
export class ReputationModule {}
