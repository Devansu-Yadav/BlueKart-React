import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuidv4 } from "uuid";

/**
 * All the routes related to User Address Management are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles fetching the user's address data.
 * send GET Request at /api/user/account/addresses
 * */

export const getAddresses = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    if (!userId || typeof userId === "object") {
        return new Response(
          404,
          {},
          {
            errors: ["The email you entered is not Registered. Not Found error"],
          }
        );
    }
    const userAddresses = schema.users.findBy({ _id: userId }).addresses;
    return new Response(200, {}, { addresses: userAddresses });
}

/**
 * This handler handles adding address to user's saved address list.
 * send POST Request at /api/user/account/addresses
 * body contains {address}
 * */

export const addAddress = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if(!userId || typeof userId === "object") {
            return new Response(
              404,
              {},
              {
                errors: ["The email you entered is not Registered. Not Found error"],
              }
            );
        }
        const userAddresses = schema.users.findBy({ _id: userId }).addresses;
        const { address } = JSON.parse(request.requestBody);
        
        userAddresses.push({
            _id: uuidv4(),
            ...address,
            createdAt: formatDate(),
            updatedAt: formatDate()
        });

        this.db.users.update({ _id: userId }, { addresses: userAddresses });
        return new Response(201, {}, { addresses: userAddresses });
    } catch (error) {
        return new Response(
            500,
            {},
            {
              error,
            }
        );
    }
};

/**
 * This handler handles removing addresses from user's saved address list.
 * send DELETE Request at /api/user/account/addresses/:addressId
 * */

export const removeAddress = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if(!userId || typeof userId === "object") {
            return new Response(
              404,
              {},
              {
                errors: ["The email you entered is not Registered. Not Found error"],
              }
            );
        }

        let userAddresses = schema.users.findBy({ _id: userId }).addresses;
        const addressId = request.params.addressId;
        userAddresses = userAddresses.filter((address) => address._id !== addressId);

        this.db.users.update({ _id: userId }, { addresses: userAddresses });
        return new Response(200, {}, { addresses: userAddresses });
    } catch (error) {
        return new Response(
            500,
            {},
            {
              error,
            }
        );
    }
};

/**
 * This handler handles updating an address of user's address list.
 * send POST Request at /api/user/account/addresses/:addressId
 * body contains {address}
 * */

export const updateAddress = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if(!userId || typeof userId === "object") {
            return new Response(
              404,
              {},
              {
                errors: ["The email you entered is not Registered. Not Found error"],
              }
            );
        }

        let userAddresses = schema.users.findBy({ _id: userId }).addresses;
        const addressId = request.params.addressId;

        // updated Address
        const { address } = JSON.parse(request.requestBody);
        userAddresses = userAddresses.reduce((updatedUserAddresses, currAddress) => 
        currAddress._id === addressId ? [...updatedUserAddresses, { _id: addressId, ...address}]: 
        [...updatedUserAddresses, currAddress], []);

        this.db.users.update({ _id: userId }, { addresses: userAddresses });
        return new Response(200, {}, { addresses: userAddresses });
    } catch (error) {
        return new Response(
            500,
            {},
            {
              error,
            }
        );
    }
};
