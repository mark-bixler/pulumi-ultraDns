// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Use this resource to manage Simple Monitor/Failover (SF) pool records in UltraDNS.
 *
 * ## Example Usage
 * ### Create SF pool record of type A (1)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ultradns from "@pulumi/ultradns";
 *
 * const sfPool = new ultradns.SfPool("a", {
 *     backupRecord: {
 *         description: "Backup record",
 *         rdata: "192.1.1.4",
 *     },
 *     liveRecordDescription: "Maintenance",
 *     liveRecordState: "NOT_FORCED",
 *     monitor: {
 *         method: "GET",
 *         url: "https://example.com",
 *     },
 *     ownerName: "a",
 *     poolDescription: "SF Pool Resource of Type A",
 *     recordDatas: ["192.1.1.3"],
 *     recordType: "A",
 *     regionFailureSensitivity: "HIGH",
 *     ttl: 120,
 *     zoneName: "example.com.",
 * });
 * ```
 * ### Create SF pool record of type AAAA (28)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ultradns from "@pulumi/ultradns";
 *
 * const aaaa = new ultradns.SfPool("aaaa", {
 *     backupRecord: {
 *         description: "Backup record",
 *         rdata: "2001:db8:85a3:0:0:8a2e:370:7324",
 *     },
 *     monitor: {
 *         method: "POST",
 *         url: "https://example.com",
 *     },
 *     ownerName: "aaaa",
 *     recordDatas: ["2001:db8:85a3:0:0:8a2e:370:7334"],
 *     recordType: "AAAA",
 *     regionFailureSensitivity: "LOW",
 *     ttl: 120,
 *     zoneName: "example.com.",
 * });
 * ```
 *
 * ## Import
 *
 * Simple Monitor/Failover (SF) pool records can be imported by combining their `owner_name`, `zone_name` and `record_type`, separated by a colon.<br/> Example `www.example.com.:example.com.:A (1)`. -> For import, the `owner_name` and `zone_name` must be a FQDN, and `record_type` should have the type as well as the corresponding number as shown in the example below. Exampleterraform
 *
 * ```sh
 *  $ pulumi import ultradns:index/sfPool:SfPool example "www.example.com.:example.com.:A (1)"
 * ```
 */
export class SfPool extends pulumi.CustomResource {
    /**
     * Get an existing SfPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SfPoolState, opts?: pulumi.CustomResourceOptions): SfPool {
        return new SfPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ultradns:index/sfPool:SfPool';

    /**
     * Returns true if the given object is an instance of SfPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SfPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SfPool.__pulumiType;
    }

    /**
     * (Block Set) Nested block describing the information for the backup record. The structure of this block is described below.
     */
    public readonly backupRecord!: pulumi.Output<outputs.SfPoolBackupRecord | undefined>;
    /**
     * (String) An optional description of the live record.
     */
    public readonly liveRecordDescription!: pulumi.Output<string | undefined>;
    /**
     * (String) Whether or not the live record is currently active. Valid values are:</br> 
     * `FORCED_INACTIVE` – the backup record should always be returned by a DNS query.</br>
     * `NOT_FORCED` – the monitor should determine if the live record or the backup record is returned by a DNS query.
     */
    public readonly liveRecordState!: pulumi.Output<string | undefined>;
    /**
     * (Block Set) Nested block describing the information for the monitor. The structure of this block is described below.
     */
    public readonly monitor!: pulumi.Output<outputs.SfPoolMonitor>;
    /**
     * (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
     */
    public readonly ownerName!: pulumi.Output<string>;
    /**
     * (String) An optional description of the Simple Failover field.
     */
    public readonly poolDescription!: pulumi.Output<string | undefined>;
    /**
     * (String List) The list of IPv4 or IPv6 addresses.
     */
    public readonly recordDatas!: pulumi.Output<string[]>;
    /**
     * (String) Must be formatted as a well-known resource record type (A or AAAA), or the corresponding number for the type (1 or 28).<br/>
     * Below are the supported resource record types with the corresponding number:<br/>
     * `A (1)`
     * `AAAA (28)`
     */
    public readonly recordType!: pulumi.Output<string>;
    /**
     * (String) Specifies the sensitivity to the number of regions that need to fail for the backup record to be made active. Valid values are `LOW`, `HIGH`.
     */
    public readonly regionFailureSensitivity!: pulumi.Output<string>;
    /**
     * (Computed) (String) Current status of the serving record. Valid values are:</br>
     * `OK` – Live record is being served.</br>
     * `CRITICAL` – The backup record is being served due to the monitor detecting a failure.</br>
     * `MANUAL` – The backup record is being served due to user forcing the live record to be inactive.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
     */
    public readonly ttl!: pulumi.Output<number | undefined>;
    /**
     * (String) Name of the zone.
     */
    public readonly zoneName!: pulumi.Output<string>;

    /**
     * Create a SfPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SfPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SfPoolArgs | SfPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SfPoolState | undefined;
            resourceInputs["backupRecord"] = state ? state.backupRecord : undefined;
            resourceInputs["liveRecordDescription"] = state ? state.liveRecordDescription : undefined;
            resourceInputs["liveRecordState"] = state ? state.liveRecordState : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["ownerName"] = state ? state.ownerName : undefined;
            resourceInputs["poolDescription"] = state ? state.poolDescription : undefined;
            resourceInputs["recordDatas"] = state ? state.recordDatas : undefined;
            resourceInputs["recordType"] = state ? state.recordType : undefined;
            resourceInputs["regionFailureSensitivity"] = state ? state.regionFailureSensitivity : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["zoneName"] = state ? state.zoneName : undefined;
        } else {
            const args = argsOrState as SfPoolArgs | undefined;
            if ((!args || args.monitor === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitor'");
            }
            if ((!args || args.ownerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ownerName'");
            }
            if ((!args || args.recordDatas === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recordDatas'");
            }
            if ((!args || args.recordType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recordType'");
            }
            if ((!args || args.regionFailureSensitivity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'regionFailureSensitivity'");
            }
            if ((!args || args.zoneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneName'");
            }
            resourceInputs["backupRecord"] = args ? args.backupRecord : undefined;
            resourceInputs["liveRecordDescription"] = args ? args.liveRecordDescription : undefined;
            resourceInputs["liveRecordState"] = args ? args.liveRecordState : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["ownerName"] = args ? args.ownerName : undefined;
            resourceInputs["poolDescription"] = args ? args.poolDescription : undefined;
            resourceInputs["recordDatas"] = args ? args.recordDatas : undefined;
            resourceInputs["recordType"] = args ? args.recordType : undefined;
            resourceInputs["regionFailureSensitivity"] = args ? args.regionFailureSensitivity : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["zoneName"] = args ? args.zoneName : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SfPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SfPool resources.
 */
export interface SfPoolState {
    /**
     * (Block Set) Nested block describing the information for the backup record. The structure of this block is described below.
     */
    backupRecord?: pulumi.Input<inputs.SfPoolBackupRecord>;
    /**
     * (String) An optional description of the live record.
     */
    liveRecordDescription?: pulumi.Input<string>;
    /**
     * (String) Whether or not the live record is currently active. Valid values are:</br> 
     * `FORCED_INACTIVE` – the backup record should always be returned by a DNS query.</br>
     * `NOT_FORCED` – the monitor should determine if the live record or the backup record is returned by a DNS query.
     */
    liveRecordState?: pulumi.Input<string>;
    /**
     * (Block Set) Nested block describing the information for the monitor. The structure of this block is described below.
     */
    monitor?: pulumi.Input<inputs.SfPoolMonitor>;
    /**
     * (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
     */
    ownerName?: pulumi.Input<string>;
    /**
     * (String) An optional description of the Simple Failover field.
     */
    poolDescription?: pulumi.Input<string>;
    /**
     * (String List) The list of IPv4 or IPv6 addresses.
     */
    recordDatas?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (String) Must be formatted as a well-known resource record type (A or AAAA), or the corresponding number for the type (1 or 28).<br/>
     * Below are the supported resource record types with the corresponding number:<br/>
     * `A (1)`
     * `AAAA (28)`
     */
    recordType?: pulumi.Input<string>;
    /**
     * (String) Specifies the sensitivity to the number of regions that need to fail for the backup record to be made active. Valid values are `LOW`, `HIGH`.
     */
    regionFailureSensitivity?: pulumi.Input<string>;
    /**
     * (Computed) (String) Current status of the serving record. Valid values are:</br>
     * `OK` – Live record is being served.</br>
     * `CRITICAL` – The backup record is being served due to the monitor detecting a failure.</br>
     * `MANUAL` – The backup record is being served due to user forcing the live record to be inactive.
     */
    status?: pulumi.Input<string>;
    /**
     * (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
     */
    ttl?: pulumi.Input<number>;
    /**
     * (String) Name of the zone.
     */
    zoneName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SfPool resource.
 */
export interface SfPoolArgs {
    /**
     * (Block Set) Nested block describing the information for the backup record. The structure of this block is described below.
     */
    backupRecord?: pulumi.Input<inputs.SfPoolBackupRecord>;
    /**
     * (String) An optional description of the live record.
     */
    liveRecordDescription?: pulumi.Input<string>;
    /**
     * (String) Whether or not the live record is currently active. Valid values are:</br> 
     * `FORCED_INACTIVE` – the backup record should always be returned by a DNS query.</br>
     * `NOT_FORCED` – the monitor should determine if the live record or the backup record is returned by a DNS query.
     */
    liveRecordState?: pulumi.Input<string>;
    /**
     * (Block Set) Nested block describing the information for the monitor. The structure of this block is described below.
     */
    monitor: pulumi.Input<inputs.SfPoolMonitor>;
    /**
     * (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
     */
    ownerName: pulumi.Input<string>;
    /**
     * (String) An optional description of the Simple Failover field.
     */
    poolDescription?: pulumi.Input<string>;
    /**
     * (String List) The list of IPv4 or IPv6 addresses.
     */
    recordDatas: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (String) Must be formatted as a well-known resource record type (A or AAAA), or the corresponding number for the type (1 or 28).<br/>
     * Below are the supported resource record types with the corresponding number:<br/>
     * `A (1)`
     * `AAAA (28)`
     */
    recordType: pulumi.Input<string>;
    /**
     * (String) Specifies the sensitivity to the number of regions that need to fail for the backup record to be made active. Valid values are `LOW`, `HIGH`.
     */
    regionFailureSensitivity: pulumi.Input<string>;
    /**
     * (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
     */
    ttl?: pulumi.Input<number>;
    /**
     * (String) Name of the zone.
     */
    zoneName: pulumi.Input<string>;
}
