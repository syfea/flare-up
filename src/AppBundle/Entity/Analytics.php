<?php

namespace AppBundle\Entity;

class Analytics
{
    function getService($analytics, $analytics_file)
    {
        // Creates and returns the Analytics service object.

        // Use the developers console and replace the values with your
        // service account email, and relative location of your key file.
        $service_account_email = $analytics['id_account'];
        $key_file_location =$analytics_file;

        // Create and configure a new client object.
        $client = new \Google_Client();
        $client->setApplicationName("flareup");
        $analytics = new \Google_Service_Analytics($client);

        // Read the generated client_secrets.p12 key.
        $key = file_get_contents($key_file_location);
        $cred = new \Google_Auth_AssertionCredentials(
            $service_account_email,
            array(\Google_Service_Analytics::ANALYTICS_READONLY),
            $key
        );
        $client->setAssertionCredentials($cred);
        if($client->getAuth()->isAccessTokenExpired()) {
            $client->getAuth()->refreshTokenWithAssertion($cred);
        }

        return $analytics;
    }

    function getFirstprofileId(&$analytics) {
        // Get the user's first view (profile) ID.

        // Get the list of accounts for the authorized user.
        $accounts = $analytics->management_accounts->listManagementAccounts();

        if (count($accounts->getItems()) > 0) {
            $items = $accounts->getItems();
            $firstAccountId = $items[0]->getId();

            // Get the list of properties for the authorized user.
            $properties = $analytics->management_webproperties
                ->listManagementWebproperties($firstAccountId);

            if (count($properties->getItems()) > 0) {
                $items = $properties->getItems();
                $firstPropertyId = $items[0]->getId();

                // Get the list of views (profiles) for the authorized user.
                $profiles = $analytics->management_profiles
                    ->listManagementProfiles($firstAccountId, $firstPropertyId);

                if (count($profiles->getItems()) > 0) {
                    $items = $profiles->getItems();

                    // Return the first view (profile) ID.
                    return $items[0]->getId();

                } else {
                    throw new Exception('No views (profiles) found for this user.');
                }
            } else {
                throw new Exception('No properties found for this user.');
            }
        } else {
            throw new Exception('No accounts found for this user.');
        }
    }

    function getArticlesResults(&$analytics, $profileId, $beginDate = '7daysAgo', $endDate = 'today', $page = array()) {
        $results = $analytics->data_ga->get(
            'ga:' . $profileId,
            $beginDate,
            $endDate,
            'ga:sessions,ga:users,ga:avgTimeOnSite'
        );
        $data = $results->getRows();

        if (count($data) > 0) {
            return [
                'sessions' => $data[0][0],
                'users' => $data[0][1],
                'avgTimeOnSite' => $data[0][2],
            ];
        } else {
            return [
                'sessions' => 0,
                'users' => 0,
                'avgTimeOnSite' => 0,
            ];
        }
    }
}